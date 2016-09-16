zz = new Chrono();

function startstopreset(target_id) {
  if (typeof zz != "undefined") {
    zz.target_id = target_id;
    switch (zz.etat) {
      case "start":
        zz.etat = "stop"
        zz.stoppe();
        break;
      case "stop":
        zz.etat = "reset";
        zz.retourzero();
        break;
      case "reset":
        zz.etat = "start";
        zz.demarre();
        zz.timer_id = setInterval('zz.chronographe()', 100);
        break;
      case "uninitialised":
        zz.etat = "start";
        zz.demarre();
        zz.timer_id = setInterval('zz.chronographe()', 100);
        break;
      default:
        alert ("etat inconnu");
        return false;
    }
  } else {
    zz.target_id = target_id;
    zz.demarre();
    zz.etat = "start";
  }
  return true;
}
