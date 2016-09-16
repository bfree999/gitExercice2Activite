//chronographe

function Chrono () {
  this.start_time = 0;
  this.current_time = 0;
  this.target_id = "";
  this.timer_id = 0;
  this.etat = "uninitialised";

  this.demarre = function () {
    this.start_time = new Date();
    this.chronographe();
  }

  this.stoppe = function () {
    clearInterval(this.timer_id);
  }

  this.retourzero = function() {
    if (this.target_id != "") {
      document.getElementById(this.target_id).value = "0:0:0";
    }
  }

  this.chronographe = function () {
    this.current_time = new Date();
    var diff = this.current_time - this.start_time;
    diff = new Date(diff);
    var thr = (diff.getHours()-1).toString();
    var tmin = diff.getMinutes().toString();
    var tsec = diff.getSeconds().toString();
    if (this.target_id != "") {
      document.getElementById(this.target_id).value = thr + ":" + tmin + ":" + tsec;
    }
  }
}
