import { useDispatch, useSelector } from "react-redux";
import { filterTasks, getTasks } from "redux/tasks/operations";

const Filter = () => {
    const {theme} = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const filterTasksBySelect = (value) => {
        dispatch(filterTasks(value))
    } 

    const getAllTasks = () => {
        dispatch(getTasks())
    }

  return <>
    <div className={`${theme === "dark" ? 'bg-[#ffffff]/[.10]' : 'bg-[#161616]/[.10]'} w-full h-[1px] mb-[14px]`}></div>
        <div className='flex justify-between mb-[16px]'>
          <h3 className={`font-medium tracking-[-0.28px] ${theme === 'dark' ? 'text-[#fff]' : 'text-[#161616]'}`}>Label color</h3>
          <button type='button' onClick={getAllTasks} className={`${theme === 'dark' ? 'text-[#ffffff]/[.50]' : 'text-[#161616]/[.50]'} text-[12px] tracking-[-0.24px] border-b ${theme === 'dark' ? 'border-[#ffffff]/[.50]' : 'border-[#161616]/[.50]'}`}>Show all</button>
        </div>

        <div className='flex flex-col gap-[12px]'>
          <label htmlFor='without' className={`flex items-center gap-[8px] text-[12px] ${theme === 'dark' ? 'text-[#ffffff]/[.50]' : 'text-[#161616]/[.50]'} tracking-[-0.24px]`}>
          <input type="radio" onChange={(e) => filterTasksBySelect(e.target.value)} name="priority" id='without' value="Without priority" className={`appearance-none flex justify-center items-center ${theme === 'dark' ? 'bg-[#ffffff]/[.30] checked:after:border-[#ffffff]/[.30]' : 'bg-[#161616]/[.30] checked:after:border-[#161616]/[.30]'} w-[14px] h-[14px] rounded-[50%] relative checked:after:content-[''] checked:after:absolute checked:after:w-[20px] checked:after:h-[20px] checked:after:bg-transparent checked:after:border checked:after:border-solid checked:w-[14px] checked:h-[14px] checked:after:rounded-[50%]`} />
            Without priority
          </label>

          <label htmlFor='low' className={`flex items-center gap-[8px] text-[12px] ${theme === 'dark' ? 'text-[#ffffff]/[.50]' : 'text-[#161616]/[.50]'} tracking-[-0.24px]`}>
          <input type="radio" name="priority" onChange={(e) => filterTasksBySelect(e.target.value)} id='low' value="Low" className="appearance-none flex justify-center items-center bg-[#8FA1D0] w-[14px] h-[14px] rounded-[50%] relative checked:after:content-[''] checked:after:absolute checked:after:w-[20px] checked:after:h-[20px] checked:after:bg-transparent checked:after:border checked:after:border-solid checked:after:border-[#8FA1D0] checked:w-[14px] checked:h-[14px] checked:after:rounded-[50%]" />
            Low
          </label>

          <label htmlFor='medium' className={`flex items-center gap-[8px] text-[12px] ${theme === 'dark' ? 'text-[#ffffff]/[.50]' : 'text-[#161616]/[.50]'} tracking-[-0.24px]`}>
          <input type="radio" name="priority" onChange={(e) => filterTasksBySelect(e.target.value)} id='medium' value="Medium" className="appearance-none flex justify-center items-center bg-[#E09CB5] w-[14px] h-[14px] rounded-[50%] relative checked:after:content-[''] checked:after:absolute checked:after:w-[20px] checked:after:h-[20px] checked:after:bg-transparent checked:after:border checked:after:border-solid checked:after:border-[#E09CB5] checked:w-[14px] checked:h-[14px] checked:after:rounded-[50%]" />
            Medium
          </label>

          <label htmlFor='high' className={`flex items-center gap-[8px] text-[12px] ${theme === 'dark' ? 'text-[#ffffff]/[.50]' : 'text-[#161616]/[.50]'} tracking-[-0.24px]`}>
          <input type="radio" name="priority" onChange={(e) => filterTasksBySelect(e.target.value)} id='high' value="High" className="appearance-none flex justify-center items-center bg-[#BEDBB0] w-[14px] h-[14px] rounded-[50%] relative checked:after:content-[''] checked:after:absolute checked:after:w-[20px] checked:after:h-[20px] checked:after:bg-transparent checked:after:border checked:after:border-solid checked:after:border-[#BEDBB0] checked:w-[14px] checked:h-[14px] checked:after:rounded-[50%]" />
            High
          </label>
        </div>
  </>
}

export default Filter
