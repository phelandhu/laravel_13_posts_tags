import { useState, useEffect } from "react";
import axios from "axios";
import StoryTag from './Tag';

function TagList() {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadTags = async () => {
      setLoading(true);
      const res = await axios.get("http://localhost:8000/api/tags");
      setTags(res.data);
      setLoading(false);
    };
    loadTags();
  }, []);

    return (
        <>
            <aside className="panel panel--left overflow-y-auto">
                <div className="sticky top-0">
                    <h2>Story Tags</h2>
                </div>
                <div id="menu_list" className="my_tags">
                    {loading ? <p>Loading...</p> : tags.map((tag) => (
                        <div key={tag.id}>
                        <StoryTag key={tag.id} tag={tag} />
                        </div>
                    ))}
                </div>
            </aside>
        </>
    )
}

export default TagList