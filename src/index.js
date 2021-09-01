import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4:55PM"
                    avatar={faker.image.avatar()}
                    text="First comment"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    timeAgo="Today at 4:55PM"
                    avatar={faker.image.avatar()}
                    text="Second comment"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Jane"
                    timeAgo="Today at 4:55PM"
                    avatar={faker.image.avatar()}
                    text="Third comment"
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));

// https://semantic-ui.com/
// faker js
