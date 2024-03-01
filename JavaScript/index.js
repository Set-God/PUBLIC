
function sound()
{
  // 対象ID
  var id = 'sound-file' ;
  
  // もし、初回以外だったら、音声ファイルを、巻き戻しする
  if( typeof( document.getElementById( id ).currentTime ) != 'undefined')
  {
    document.getElementById( id ).currentTime = 0;
  }
  
  // IDの中にあるsound-fileの音声ファイルを再生する
  document.getElementById( id ).play() ;
}

function reset(){
  // 対象ID
  var id = 'sound-file' ;
  var id2 = 'sound-file2' ;
  
  document.getElementById( id ).pause();
  document.getElementById( id ).currentTime = 0;
  document.getElementById( id2 ).play();
  document.getElementById( id2 ).currentTime = 0;
}