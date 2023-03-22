import { Button, Modal, Typography, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import { usePosts } from "../../contexts/postsContext";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

const ModalProduct = ({dbcard, card}) => {
    const {likeProduct} = usePosts()
    const [comment, setComments] = useState({ item: "", id: Date.now() });
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleInp = (e) => {
        let obj = {
          ...comment,
          [e.target.name]: e.target.value,
        };
        setComments(obj);
        // comment("");
    };

    function commentProduct() {
        dbcard.comments.push(comment)
        likeProduct(dbcard)
        console.log(dbcard.comments)
      }

  return (
    <>
    <div style={{ position: "relative", width: '600px', margin: '0 auto'}}>
        <div style={{display: 'flex', alignItems: 'center'}} >
            {/* <Button
            sx={{
                position: "absolute",
                bottom: "-40px",
                left: "-320px",
                color: 'gray', 
                width: '1700px'
            }}
            onClick={handleOpen}
            >
            Review
            </Button> */}
            {dbcard ? (
            <>
                <h1
                key={dbcard.id}
                style={{
                    fontSize: "15px",
                    marginLeft: '27rem',
                    marginTop: '15px',
                    bottom: "-40px",
                    left: "-275px",
                    color: 'gray',
                }}
                >
                {dbcard.comments.length}
                <Button
                    sx={{
                        position: "absolute",
                        bottom: "-40px",
                        left: "-320px",
                        color: 'gray', 
                        width: '1700px',
                        marginBottom: '5.5rem'
                    }}
                    onClick={handleOpen}
                    >
                    Review
                    </Button>
                </h1>
            </>
            ) : (
            <h1>Error</h1>
            )}
        </div>
  </div>
  <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        <Tooltip title="Profile">
          <IconButton sx={{ paddingLeft: "2px" }}>
            <Avatar alt={card.owner} src="..." />
          </IconButton>
        </Tooltip>
        <input
          name="item"
          placeholder="add comment"
          value={comment.item}
          onChange={handleInp}
          type="text"
        />
        <SendIcon
          onClick={commentProduct}
          style={{ color: "gray", cursor: "pointer", margin: "2px" }}
        ></SendIcon>
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        {dbcard ? (
          <>
            {dbcard.comments.map((elem) => (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <Tooltip title="Profile">
                  <IconButton sx={{ paddingLeft: "2px" }}>
                    <Avatar alt={card.owner} src="..." />
                  </IconButton>
                </Tooltip>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "10px",
                  }}
                >
                  <h4 style={{ margin: "0", color: "black" }}>{card.owner}</h4>
                  <p style={{ margin: "0", color: "black" }}>{elem.item}</p>
                </div>
                <DeleteIcon
                  style={{
                    color: "black",
                    marginLeft: "160px",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </DeleteIcon>
              </div>
            ))}
          </>
        ) : (
          <h1>Error</h1>
        )}
      </Typography>
    </Box>
  </Modal>
</>
  )
}

export default ModalProduct