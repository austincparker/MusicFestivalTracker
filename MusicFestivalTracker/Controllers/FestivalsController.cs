using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MusicFestivalTracker.Controllers
{
    public class FestivalsController : Controller
    {
        // GET: FestivalsController
        public ActionResult Index()
        {
            return View();
        }

        // GET: FestivalsController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: FestivalsController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: FestivalsController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: FestivalsController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: FestivalsController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: FestivalsController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: FestivalsController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
