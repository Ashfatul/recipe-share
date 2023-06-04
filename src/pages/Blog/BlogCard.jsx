import React from "react";
import { Card } from "react-bootstrap";

const BlogCard = ({post}) => {
    return(
        <div className="col-md-6 d-flex mb-3">
            <Card>
            <Card.Header>
            <Card.Title>{post.title}</Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    {post.details}
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    )
}

export default BlogCard;