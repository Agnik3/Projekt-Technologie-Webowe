import React, { useState, useEffect } from 'react';

export const AuthorsList = ({ authors = [], onDelete, onUpdate, onRefresh }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedAuthor, setSelectedAuthor] = useState({});
    const [newName, setNewName] = useState('');
    const [newSurname, setNewSurname] = useState('');

    const handleUpdateClick = (author) => {
        setSelectedAuthor(author);
        setNewName(author.name);
        setNewSurname(author.surname);
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
        setSelectedAuthor({});
        setNewName('');
        setNewSurname('');
    };

    const handleUpdateSubmit = () => {
        if (newName && newSurname) {
            onUpdate(selectedAuthor.id, newName, newSurname);
            handleModalClose();
        }
    };

    useEffect(() => {
        console.log('Fetching authors...');
    }, [onRefresh]);

    return (
        <div>
            <div>
                <button className="btn2" onClick={onRefresh}>Refresh Authors</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.map((author) => (
                        <tr key={author.id}>
                            <td>{author.name}</td>
                            <td>{author.surname}</td>
                            <td className="actions">
                                <button className="btn" onClick={() => onDelete(author.id)}>Delete</button>
                                <button className="btn" onClick={() => handleUpdateClick(author)}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {showModal && (
                <div>
                    <div>
                        <span onClick={handleModalClose}>&times;</span>
                        <h2>Edit Author</h2>
                        <form onSubmit={handleUpdateSubmit}>
                            <label className="xdd">
                                Name:
                                <input
                                    type="text"
                                    value={newName}
                                    onChange={(e) => setNewName(e.target.value)}
                                    className="xd"
                                />
                            </label>
                            <label className="xdd">
                                Surname:
                                <input
                                    type="text"
                                    value={newSurname}
                                    onChange={(e) => setNewSurname(e.target.value)}
                                    className="xd"
                                />
                            </label>
                            <button type="submit" className="btn">Edit</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};