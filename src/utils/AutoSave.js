import { setDoc, addDoc, collection} from 'firebase/firestore'
function AutoSave (auth, jrnl, page, db, jrnlNumber) {
    var time = 9999999;

    var interval = setInterval(function() { 
    if (time >= 1) { 
        console.log('AUTOSAVE!')
            async function SaveData() {
                if (setDoc(collection(db, auth.currentUser.uid, jrnlNumber)))
                  await addDoc(collection(db, auth.currentUser.uid), {
                  jrnlTitle: jrnl,
                  pages: [page],
                  ownerID: auth.currentUser.uid
                  });
              }
        time--;
    }
    else { 
        clearInterval(interval);
    }
    }, 30000);
}

export default AutoSave