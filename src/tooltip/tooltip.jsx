export const Tooltip = ({handlePosition,handleHover,handleLeave,position,Hovering})=>{
    return(
        <>
        {/* heading  */}
            <div className="grp-name">
                Select the position for Hovering...
            </div>
            {/* buttons to set position  */}
            <div className="btn-group">
                <button className={position==="top"? "btn active" : "btn"} onClick={()=>handlePosition("top")}>TOP</button>
                <button className={position==="bottom" ? "btn active" : "btn"} onClick={()=>handlePosition("bottom")}>BOTTOM</button>
                <button className={position==="left" ? "btn active" : "btn"} onClick={()=>handlePosition("left")}>LEFT</button>
                <button className={position==="right" ? "btn active" : "btn"}  onClick={()=>handlePosition("right")}>RIGHT</button>
            </div>
            {/* hovering  */}
            <div className="hover-group">
                <button 
                    className="pos-box"
                    onMouseOver={handleHover}
                    onMouseOut={handleLeave}>
                        Hover Over me!!!  &nbsp;
                </button>
                {Hovering && (
                    <div className={position}>
                        thanks for hovering in {position} position!!!
                    </div>
                )}
            </div>
        </>
    )
}