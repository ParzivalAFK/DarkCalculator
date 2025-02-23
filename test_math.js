let UserDepth = 123
let UserLength = 456
let User_Cannon_Offset = 50   
let depth_length_user_selection = "Barrel count" 
let Overworld = false
let Stone = false
let Deepslate = false
let Nether = true
let Basalt = true
let Netherack = false

function mround(number, multiple) {
    return Math.round(number / multiple) * multiple;
}

let row_spacing_hopper = 0
if (Overworld && Stone){row_spacing_hopper = 4}
if (Overworld && Deepslate){row_spacing_hopper = 4}
if (Nether && Basalt){row_spacing_hopper = 5}
if (Nether && Netherack){row_spacing_hopper = 6}

let row_spacing_hopper_safe =	row_spacing_hopper

let initial_offset_dropper = Math.ceil(User_Cannon_Offset/1.8)
let initial_offset_dropper_safe = initial_offset_dropper

let barrel_count          =	Math.ceil(UserDepth /1.8)
let tunnel_length_dropper =	Math.ceil(UserLength/1.8)

let tunnel_length_dropper_safe = 
    depth_length_user_selection === "Tunnel length"
    ? tunnel_length_dropper + Math.abs(tunnel_length_dropper - (barrel_count + initial_offset_dropper + row_spacing_hopper))
    : tunnel_length_dropper;

let barrel_count_safe =
    depth_length_user_selection === "Barrel count"
    ? mround(tunnel_length_dropper_safe - initial_offset_dropper_safe - 2 * row_spacing_hopper_safe, row_spacing_hopper_safe)
    : barrel_count;


let explode_when_done_calc =	(barrel_count + row_spacing_hopper + initial_offset_dropper) >  tunnel_length_dropper
   
let time_hr_min_sec    =	((((24 * tunnel_length_dropper      * (barrel_count     /row_spacing_hopper     ) + (20 * tunnel_length_dropper     ))/1200))/60)/24
let time_hr_min_sec_safe =	((((24 * tunnel_length_dropper_safe * (barrel_count_safe/row_spacing_hopper_safe) + (20 * tunnel_length_dropper_safe))/1200))/60)/24

let game_ticks     =	Math.ceil(((20 * tunnel_length_dropper      * (barrel_count     /row_spacing_hopper     )) + (20 * tunnel_length_dropper)))
let game_ticks_safe =	Math.ceil(((20 * tunnel_length_dropper_safe * (barrel_count_safe/row_spacing_hopper_safe)) + (20 * tunnel_length_dropper_safe)))
   
let calculated_depth =	Math.ceil((barrel_count_safe - initial_offset_dropper_safe)*1.8)
let calculated_length =	Math.ceil( tunnel_length_dropper_safe* 1.8)


// LOG
// console.log("row_spacing_hopper",row_spacing_hopper)
// console.log("initial_offset_dropper ",initial_offset_dropper)
// console.log("initial_offset_dropper_safe",initial_offset_dropper_safe)
// console.log("barrel_count",barrel_count)
// console.log("tunnel_length_dropper",tunnel_length_dropper)
// console.log("tunnel_length_dropper_safe",tunnel_length_dropper_safe)
// console.log("barrel_count_safe",barrel_count_safe)
// console.log("row_spacing_hopper_safe",row_spacing_hopper_safe)
// console.log("explode_when_done_calc",explode_when_done_calc)
// console.log("time_hr_min_sec",time_hr_min_sec)
// console.log("time_hr_min_sec_safe",time_hr_min_sec_safe)
// console.log("game_ticks",game_ticks)
// console.log("game_ticks_safe",game_ticks_safe)
// console.log("calculated_depth",calculated_depth)
// console.log("calculated_length",calculated_length)
