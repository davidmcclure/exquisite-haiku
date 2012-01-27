/*
 * Index controller
 *
 * @package     exquisite-haiku
 * @author      David McClure
 * @license     Apache 2.0
 */

module.exports = function(app) {

    /*
     * GET /
     */
    app.get('/', function(req, res) {
        res.render('index', {
          title: 'exquisitehaiku',
          layout: '_layouts/index'
        });
    });

}
