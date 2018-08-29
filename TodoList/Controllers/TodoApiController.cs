using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TodoList.Models;

namespace TodoList.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        [Route("Todos")]
        public List<Todo> GetTodos()
        {
            return new List<Todo>
            {
                new Todo
                {
                    Id = 1,
                    Name = "test1",
                    Title = "Mr"
                },
                new Todo
                {
                    Id = 2,
                    Name = "test3",
                    Title = "Mr"
               }
            }; 
        }
    }
}