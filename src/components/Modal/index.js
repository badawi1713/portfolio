import { Tooltip } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogActions from '@material-ui/core/DialogActions';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <p className=' text-xl font-semibold'>{children}</p>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: 0,
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

const Modal = ({ open, handleClose, details = "" }) => {

    const openUrlHandler = (url) => {
        window.open(`${url}`, '_blank')
    }

    return (
        <div>

            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    {details.title || "Title"}
                </DialogTitle>
                <DialogContent dividers>
                    <div className='relative'>
                        <img src={details.imageURL || ""} alt='img-works' />
                        <div className='p-4 relative md:absolute z-10 bottom-0 bg-black bg-opacity-80 w-full'>
                            <p className='text-white text-sm'>{details.description || ""}</p>
                        </div>
                    </div>                </DialogContent>
                <DialogActions className='space-x-4'>
                    <div className='flex items-center p-2'>
                        <Tooltip title={details.repoURL ? "Click to Open Source Code" : "Sorry, Source Code is Unavailable"} arrow>
                            <p onClick={() => details.repoURL && openUrlHandler(details.repoURL)} className={details.repoURL ? 'hover:text-red-500 cursor-pointer' : 'hover:text-gray-400 cursor-not-allowed'}>Source Code</p>
                        </Tooltip>
                    </div>
                    <div className='flex items-center p-2'>
                        <Tooltip title={details.demoURL ? "Click to Watch Demo" : "Sorry, Demo is Unavailable"} arrow>
                            <p onClick={() => details.demoURL && openUrlHandler(details.demoURL)} className={details.demoURL ? 'hover:text-red-500 cursor-pointer' : 'hover:text-gray-400 cursor-not-allowed'}>Demo</p>
                        </Tooltip>
                    </div>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Modal