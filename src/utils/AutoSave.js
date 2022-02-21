function AutoSave (auth, jrnl, page, user, db, collection, addDoc) {
    var time = 9999999;

    var interval = setInterval(function() { 
    if (time >= 1) { 
        console.log('AUTOSAVE!')
            // async function SaveData() {
            //     await addDoc(collection(db, auth.currentUser.uid), {
            //     jrnlTitle: jrnl,
            //     pages: [page],
            //     ownerID: auth.currentUser.uid
            //     });
            // }
        time--;
    }
    else { 
        clearInterval(interval);
    }
    }, 30000);
}

export default AutoSave