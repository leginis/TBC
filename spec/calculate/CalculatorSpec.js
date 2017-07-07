describe("calculate", function() {
  var calculate = require('../../calculate');

  it("calculates for 3-5 months for RUB", function() {
    var r = calculate({duration: 3, amount: 50000, currency:"RUB"});
    expect(r.money).toEqual(50625);
    expect(r.percent).toEqual(0.05);
    expect(r.profit).toEqual(625)
  });

  it("calculates for 6-11 months for RUB", function() {
    var r = calculate({duration: 6, amount: 50000, currency:"RUB"});
    expect(r.money).toEqual(51500);
    expect(r.percent).toEqual(0.06);
    expect(r.profit).toEqual(1500)
  });

  it("calculates for 12 months for RUB", function() {
    var r = calculate({duration: 12, amount: 50000, currency:"RUB"});
    expect(r.money).toEqual(53500);
    expect(r.percent).toEqual(0.07);
    expect(r.profit).toEqual(3500)
  });

  it("calculates for 13-24 months for RUB", function() {
    var r = calculate({duration: 15, amount: 50000, currency:"RUB"});
    expect(r.money).toEqual(54063);
    expect(r.percent).toEqual(0.065);
    expect(r.profit).toEqual(4063)
  });

  it("calculates for 3-5 months for RUB if increased rate", function() {
    var r = calculate({duration: 3, amount: 50000, currency:"RUB", increasedRate: true});
    expect(r.money).toEqual(50688);
    expect(r.percent).toEqual(0.055);
    expect(r.profit).toEqual(688)
  });

  it("calculates for 6-11 months for RUB if increased rate", function() {
    var r = calculate({duration: 6, amount: 50000, currency:"RUB", increasedRate: true});
    expect(r.money).toEqual(51750);
    expect(r.percent).toEqual(0.07);
    expect(r.profit).toEqual(1750)
  });

  it("calculates for 12 months for RUB if increased rate", function() {
    var r = calculate({duration: 12, amount: 50000, currency:"RUB", increasedRate: true});
    expect(r.money).toEqual(54000);
    expect(r.percent).toEqual(0.08);
    expect(r.profit).toEqual(4000)
  });

  it("calculates for 13-24 months for RUB if increased rate", function() {
    var r = calculate({duration: 15, amount: 50000, currency:"RUB", increasedRate: true});
    expect(r.money).toEqual(55000);
    expect(r.percent).toEqual(0.08);
    expect(r.profit).toEqual(5000)
  });

  it("calculates for 3-5 months for RUB if capitalization", function() {
    var r = calculate({duration: 3, amount: 50000, currency:"RUB", capitalization: true});
    expect(r.money).toEqual(50628);
    expect(r.percent).toEqual(0.05);
    expect(r.profit).toEqual(628)
  });

  it("calculates for 6-11 months for RUB if capitalization", function() {
    var r = calculate({duration: 6, amount: 50000, currency:"RUB", capitalization: true});
    expect(r.money).toEqual(51519);
    expect(r.percent).toEqual(0.06);
    expect(r.profit).toEqual(1519)
  });

  it("calculates for 12 months for RUB if capitalization", function() {
    var r = calculate({duration: 12, amount: 50000, currency:"RUB", capitalization: true});
    expect(r.money).toEqual(53615);
    expect(r.percent).toEqual(0.07);
    expect(r.profit).toEqual(3615)
  });

  it("calculates for 13-24 months for RUB if capitalization", function() {
    var r = calculate({duration: 15, amount: 50000, currency:"RUB", capitalization: true});
    expect(r.money).toEqual(54220);
    expect(r.percent).toEqual(0.065);
    expect(r.profit).toEqual(4220)
  });

  it("calculates for 3-5 months for RUB if capitalization and increased rate", function() {
    var r = calculate({duration: 3, amount: 50000, currency:"RUB", capitalization: true, increasedRate: true});
    expect(r.money).toEqual(50691);
    expect(r.percent).toEqual(0.055);
    expect(r.profit).toEqual(691)
  });

  it("calculates for 6-11 months for RUB if capitalization and increased rate", function() {
    var r = calculate({duration: 6, amount: 50000, currency:"RUB", capitalization: true, increasedRate: true});
    expect(r.money).toEqual(51776);
    expect(r.percent).toEqual(0.07);
    expect(r.profit).toEqual(1776)
  });

  it("calculates for 12 months for RUB if capitalization and increased rate", function() {
    var r = calculate({duration: 12, amount: 50000, currency:"RUB", capitalization: true, increasedRate: true});
    expect(r.money).toEqual(54150);
    expect(r.percent).toEqual(0.08);
    expect(r.profit).toEqual(4150)
  });

  it("calculates for 13-24 months for RUB if capitalization and increased rate", function() {
    var r = calculate({duration: 15, amount: 50000, currency:"RUB", capitalization: true, increasedRate: true});
    expect(r.money).toEqual(55240);
    expect(r.percent).toEqual(0.08);
    expect(r.profit).toEqual(5240)
  });

  it("calculates for 3-5 monthsfor RUB if bonus", function() {
    var r = calculate({duration: 3, amount: 50000, currency:"RUB", bonus: true});
    expect(r.money).toEqual(50878);
    expect(r.percent).toEqual(0.05);
    expect(r.profit).toEqual(628)
  });

  it("calculates for 3-5 months for RUB if capitalization, increased rate and bonus", function() {
    var r = calculate({duration: 3, amount: 50000, currency:"RUB", bonus: true, capitalization: true, increasedRate: true});
    expect(r.money).toEqual(50944);
    expect(r.percent).toEqual(0.055);
    expect(r.profit).toEqual(694)
  });


  it("calculates for 3-5 months for USD if capitalization and increased rate", function() {
    var r = calculate({duration: 3, amount: 1000, currency:"USD", bonus: true, capitalization: true, increasedRate: true});
    expect(r.money).toEqual(1006);
    expect(r.percent).toEqual(0.002);
    expect(r.profit).toEqual(1)
  });

  it("calculates for 3-5 months for USD", function() {
    var r = calculate({duration: 3, amount: 1000, currency:"USD"});
    expect(r.money).toEqual(1000);
    expect(r.percent).toEqual(0.001);
    expect(r.profit).toEqual(0)
  });

  it("calculates for 3-5 months for USD if increasedRate", function() {
    var r = calculate({duration: 3, amount: 1000, currency:"USD", increasedRate: true});
    expect(r.money).toEqual(1001);
    expect(r.percent).toEqual(0.002);
    expect(r.profit).toEqual(1)
  });

  it("calculates for 6-11 months for USD if increasedRate", function() {
    var r = calculate({duration: 6, amount: 1000, currency:"USD", increasedRate: true});
    expect(r.money).toEqual(1005);
    expect(r.percent).toEqual(0.01);
    expect(r.profit).toEqual(5)
  });

  it("calculates for 6-11 months for USD", function() {
    var r = calculate({duration: 6, amount: 1000, currency:"USD"});
    expect(r.money).toEqual(1003);
    expect(r.percent).toEqual(0.005);
    expect(r.profit).toEqual(3)
  });

  it("calculates for 6-11 months for USD if capitalization and increased rate", function() {
    var r = calculate({duration: 6, amount: 1000, currency:"USD", bonus: true, capitalization: true, increasedRate: true});
    expect(r.money).toEqual(1010);
    expect(r.percent).toEqual(0.01);
    expect(r.profit).toEqual(5)
  });

  it("calculates for 12 months for USD if capitalization and increased rate", function() {
    var r = calculate({duration: 12, amount: 1000, currency:"USD", bonus: true, capitalization: true, increasedRate: true});
    expect(r.money).toEqual(1020);
    expect(r.percent).toEqual(0.015);
    expect(r.profit).toEqual(15)
  });

  it("calculates for 13-24 months for USD if capitalization and increased rate", function() {
    var r = calculate({duration: 15, amount: 1000, currency:"USD", bonus: true, capitalization: true, increasedRate: true});
    expect(r.money).toEqual(1024);
    expect(r.percent).toEqual(0.015);
    expect(r.profit).toEqual(19)
  });

  it("calculates for 3-5 months for EUR", function() {
    var r = calculate({duration: 3, amount: 1000, currency:"EUR"});
    expect(r.money).toEqual(1000);
    expect(r.percent).toEqual(0.001);
    expect(r.profit).toEqual(0)
  });

  it("calculates for 3-5 months for EUR if capitalization, increased rate and bonus", function() {
    var r = calculate({duration: 3, amount: 1000, currency:"EUR", bonus: true, capitalization: true, increasedRate: true});
    expect(r.money).toEqual(1006);
    expect(r.percent).toEqual(0.002);
    expect(r.profit).toEqual(1)
  });

  it("calculates for 6-11 months for EUR if capitalization, increased rate and bonus", function() {
    var r = calculate({duration: 6, amount: 1000, currency:"EUR", bonus: true, capitalization: true, increasedRate: true});
    expect(r.money).toEqual(1006);
    expect(r.percent).toEqual(0.002);
    expect(r.profit).toEqual(1)
  });

  it("calculates for 6 months for EUR", function() {
    var r = calculate({duration: 6, amount: 1000, currency:"EUR"});
    expect(r.money).toEqual(1001);
    expect(r.percent).toEqual(0.001);
    expect(r.profit).toEqual(1)
  });

  it("calculates for 12 months for EUR if capitalization, increased rate and bonus", function() {
    var r = calculate({duration: 12, amount: 1000, currency:"EUR", bonus: true, capitalization: true, increasedRate: true});
    expect(r.money).toEqual(1009);
    expect(r.percent).toEqual(0.004);
    expect(r.profit).toEqual(4)
  });

  it("calculates for 12 months for EUR", function() {
    var r = calculate({duration: 12, amount: 1000, currency:"EUR"});
    expect(r.money).toEqual(1003);
    expect(r.percent).toEqual(0.003);
    expect(r.profit).toEqual(3)
  });

  it("calculates for 13-24 months for EUR if capitalization, increased rate and bonus", function() {
    var r = calculate({duration: 15, amount: 1000, currency:"EUR", bonus: true, capitalization: true, increasedRate: true});
    expect(r.money).toEqual(1010);
    expect(r.percent).toEqual(0.004);
    expect(r.profit).toEqual(5)
  });

  it("calculates for 13-24 months for EUR", function() {
    var r = calculate({duration: 15, amount: 1000, currency:"EUR"});
    expect(r.money).toEqual(1004);
    expect(r.percent).toEqual(0.003);
    expect(r.profit).toEqual(4)
  });

  //describe("when song has been paused", function() {
  //  beforeEach(function() {
  //    player.play(song);
  //    player.pause();
  //  });
  //
  //  it("should indicate that the song is currently paused", function() {
  //    expect(player.isPlaying).toBeFalsy();
  //
  //    // demonstrates use of 'not' with a custom matcher
  //    expect(player).not.toBePlaying(song);
  //  });
  //
  //  it("should be possible to resume", function() {
  //    player.resume();
  //    expect(player.isPlaying).toBeTruthy();
  //    expect(player.currentlyPlayingSong).toEqual(song);
  //  });
  //});
  //
  //// demonstrates use of spies to intercept and test method calls
  //it("tells the current song if the user has made it a favorite", function() {
  //  spyOn(song, 'persistFavoriteStatus');
  //
  //  player.play(song);
  //  player.makeFavorite();
  //
  //  expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  //});
  //
  ////demonstrates use of expected exceptions
  //describe("#resume", function() {
  //  it("should throw an exception if song is already playing", function() {
  //    player.play(song);
  //
  //    expect(function() {
  //      player.resume();
  //    }).toThrowError("song is already playing");
  //  });
  //});
});
