
import React, { useState } from 'react';
import '../styles/App.css';


const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

function App() {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');
  

  const handleSendMessage = () => {
    if (currentMessage.trim() === '') return;

    const randomUser = user_list[Math.floor(Math.random() * user_list.length)];
    const newMessage = {
      id: Date.now(),
      user: randomUser,
      text: currentMessage,
      likes: 0,
    };

    setMessages([...messages, newMessage]);
    setCurrentMessage('');
  };

  const handleLike = (messageId) => {
    const updatedMessages = messages.map(message =>
      message.id === messageId
        ? { ...message, likes: message.likes + 1 }
        : message
    );

    setMessages(updatedMessages);
  };

 
  return (
          <div className="App">
            <header className="App-header">
              <h1>React Chat App</h1>
            </header>
                
                <div className="chat-container">
                
                  <div className="message-thread">
                    {messages.map(message => (
                      
                      <div key={message.id} className="message">
                        <div className= "postAvatar">
                          <img
                            src=" https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
                            alt="user-pic"
                          />
                          <div>
                            <span className="user">{message.user}:</span>
                          </div>
                          <div>                                  
                            <span className="postTime"> a minute ago</span>
                          </div>
                        </div>
                        
                        <div className="message-content">
                          <div className='userMsg'>{message.text}</div>
                        </div>
                        {/* <button className="like-button" onClick={() => handleLike(message.id)}> */}
                        
                        <div className="postLike">
                          <button 
                                    // onClick={handlePostLikeClick}
                            onClick={() => handleLike(message.id)}
                          >
                            <img 
                              src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png"
                              alt="likes-icon" 
                            />
                          </button>
                            {/* <span>{post.likes.length}</span>  */}
                        </div>
                          
                        <span className="like-count">{message.likes}</span>
                          {/* </button> */}
                      </div>
                    ))}
                  </div>
                  <div className="input-container">
                    <input
                      type="text"
                      placeholder="Type your message..."
                      value={currentMessage}
                      onChange={(e) => setCurrentMessage(e.target.value)}
                    />
                    <button className="send-button" onClick={handleSendMessage}>Send</button>
                  </div>
                  
                </div>
              </div>
                
  );
  

 
        
        
      }

export default App;





