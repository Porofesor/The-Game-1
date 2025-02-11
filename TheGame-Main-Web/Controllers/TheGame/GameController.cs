using Microsoft.AspNetCore.Mvc;

namespace TheGame_Main_Web.Controllers.TheGame
{
    public class GameController : Controller
    {
        private readonly ILogger<GameController> _logger;


        public GameController(ILogger<GameController> logger)
        {
            _logger = logger;
        }
        public IActionResult Index()
        {
            return View("./Views/TheGame/TheGameMain.cshtml");
        }

        public IActionResult LoadGame()
        {
            return PartialView("/Views/TheGame/Board/_MainGameBoard.cshtml");
        }

        public IActionResult MiniMap()
        {
            return PartialView("/Views/TheGame/UI/_MiniMap.cshtml");
        }

        public IActionResult LeftPanel()
        {
            return PartialView("/Views/TheGame/UI/_LeftPanel.cshtml");
        }
    }
}
