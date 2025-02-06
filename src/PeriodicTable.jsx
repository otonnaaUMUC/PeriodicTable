// src/PeriodicTable.js
import React, { useState } from 'react';
import ElementDetails from  './ElementsDetails';
import elements from './elements';
import './PeriodicTable.css';

// const elements = [
//   { symbol: 'H', name: 'Hydrogen', atomicNumber: 1, atomicWeight: 1.008 },
//   { symbol: '', name: '', atomicNumber: 0, atomicWeight: 0 },
//   { symbol: '', name: '', atomicNumber: 0, atomicWeight: 0 },
//   { symbol: '', name: '', atomicNumber: 0, atomicWeight: 0 },
//   { symbol: '', name: '', atomicNumber: 0, atomicWeight: 0 },
//   { symbol: '', name: '', atomicNumber: 0, atomicWeight: 0 },
//   { symbol: '', name: '', atomicNumber: 0, atomicWeight: 0 },
//   { symbol: '', name: '', atomicNumber: 0, atomicWeight: 0 },
//   { symbol: '', name: '', atomicNumber: 0, atomicWeight: 0 },
//   { symbol: '', name: '', atomicNumber: 0, atomicWeight: 0 },
//   { symbol: '', name: '', atomicNumber: 0, atomicWeight: 0 },
//   { symbol: '', name: '', atomicNumber: 0, atomicWeight: 0 },
//   { symbol: '', name: '', atomicNumber: 0, atomicWeight: 0 },
//   { symbol: '', name: '', atomicNumber: 0, atomicWeight: 0 },
//   { symbol: '', name: '', atomicNumber: 0, atomicWeight: 0 },
//   {symbol: '', name: '', atomicNumber: 0, atomicWeight: 0 },
//   { symbol: '', name: '', atomicNumber: 0, atomicWeight: 0 },
//   { symbol: 'He', name: 'Helium', atomicNumber: 2, atomicWeight: 4.0026 },
//   { symbol: 'Li', name: 'Lithium', atomicNumber: 3, atomicWeight: 6.941 },
//   { symbol: 'Be', name: 'Beryllium', atomicNumber: 4, atomicWeight: 9.0122 },
//   { symbol: '', name: '', atomicNumber: 0, atomicWeight: 0 },
//   { symbol: '', name: '', atomicNumber: 0, atomicWeight: 0 },
//   { symbol: '', name: '', atomicNumber: 0, atomicWeight: 0 },
//   { symbol: '', name: '', atomicNumber: 0, atomicWeight: 0 },
//   { symbol: '', name: '', atomicNumber: 0, atomicWeight: 0 },
//   { symbol: '', name: '', atomicNumber: 0, atomicWeight: 0 },
//   { symbol: '', name: '', atomicNumber: 0, atomicWeight: 0 },
//   { symbol: '', name: '', atomicNumber: 0, atomicWeight: 0 },
//   { symbol: '', name: '', atomicNumber: 0, atomicWeight: 0 },
//   { symbol: '', name: '', atomicNumber: 0, atomicWeight: 0 },
//   { symbol: 'B', name: 'Boron', atomicNumber: 5, atomicWeight: 10.81 },
//   { symbol: 'C', name: 'Carbon', atomicNumber: 6, atomicWeight: 12.011 },
//   { symbol: 'N', name: 'Nitrogen', atomicNumber: 7, atomicWeight: 14.007 },
//   { symbol: 'O', name: 'Oxygen', atomicNumber: 8, atomicWeight: 15.999 },
//   { symbol: 'F', name: 'Fluorine', atomicNumber: 9, atomicWeight: 18.998 },
//   { symbol: 'Ne', name: 'Neon', atomicNumber: 10, atomicWeight: 20.18 },
//   { symbol: 'Na', name: 'Sodium', atomicNumber: 11, atomicWeight: 22.99 },
//   { symbol: 'Mg', name: 'Magnesium', atomicNumber: 12, atomicWeight: 24.305 },
//   { symbol: '', name: '', atomicNumber: 0, atomicWeight: 0 },
//   { symbol: '', name: '', atomicNumber: 0, atomicWeight: 0 },
//   { symbol: '', name: '', atomicNumber: 0, atomicWeight: 0 },
//   { symbol: '', name: '', atomicNumber: 0, atomicWeight: 0 },
//   { symbol: '', name: '', atomicNumber: 0, atomicWeight: 0 },
//   { symbol: '', name: '', atomicNumber: 0, atomicWeight: 0 },
//   { symbol: '', name: '', atomicNumber: 0, atomicWeight: 0 },
//   { symbol: '', name: '', atomicNumber: 0, atomicWeight: 0 },
//   { symbol: '', name: '', atomicNumber: 0, atomicWeight: 0 },
//   { symbol: '', name: '', atomicNumber: 0, atomicWeight: 0 },
//   { symbol: 'Al', name: 'Aluminum', atomicNumber: 13, atomicWeight: 26.982 },
//   { symbol: 'Si', name: 'Silicon', atomicNumber: 14, atomicWeight: 28.085 },
//   { symbol: 'P', name: 'Phosphorus', atomicNumber: 15, atomicWeight: 30.974 },
//   { symbol: 'S', name: 'Sulfur', atomicNumber: 16, atomicWeight: 32.06 },
//   { symbol: 'Cl', name: 'Chlorine', atomicNumber: 17, atomicWeight: 35.45 },
//   { symbol: 'Ar', name: 'Argon', atomicNumber: 18, atomicWeight: 39.948 },
//   { symbol: 'K', name: 'Potassium', atomicNumber: 19, atomicWeight: 39.098 },
//   { symbol: 'Ca', name: 'Calcium', atomicNumber: 20, atomicWeight: 40.078 },
//   { symbol: 'Sc', name: 'Scandium', atomicNumber: 21, atomicWeight: 44.956 },
//   { symbol: 'Ti', name: 'Titanium', atomicNumber: 22, atomicWeight: 47.867 },
//   { symbol: 'V', name: 'Vanadium', atomicNumber: 23, atomicWeight: 50.942 },
//   { symbol: 'Cr', name: 'Chromium', atomicNumber: 24, atomicWeight: 51.996 },
//   { symbol: 'Mn', name: 'Manganese', atomicNumber: 25, atomicWeight: 54.938 },
//   { symbol: 'Fe', name: 'Iron', atomicNumber: 26, atomicWeight: 55.845 },
//   { symbol: 'Co', name: 'Cobalt', atomicNumber: 27, atomicWeight: 58.933 },
//   { symbol: 'Ni', name: 'Nickel', atomicNumber: 28, atomicWeight: 58.693 },
//   { symbol: 'Cu', name: 'Copper', atomicNumber: 29, atomicWeight: 63.546 },
//   { symbol: 'Zn', name: 'Zinc', atomicNumber: 30, atomicWeight: 65.38 },
//   { symbol: 'Ga', name: 'Gallium', atomicNumber: 31, atomicWeight: 69.723 },
//   { symbol: 'Ge', name: 'Germanium', atomicNumber: 32, atomicWeight: 72.64 },
//   { symbol: 'As', name: 'Arsenic', atomicNumber: 33, atomicWeight: 74.922 },
//   { symbol: 'Se', name: 'Selenium', atomicNumber: 34, atomicWeight: 78.96 },
//   { symbol: 'Br', name: 'Bromine', atomicNumber: 35, atomicWeight: 79.904 },
//   { symbol: 'Kr', name: 'Krypton', atomicNumber: 36, atomicWeight: 83.798 },
//   { symbol: 'Rb', name: 'Rubidium', atomicNumber: 37, atomicWeight: 85.467 },
//   { symbol: 'Sr', name: 'Strontium', atomicNumber: 38, atomicWeight: 87.62 },
//   { symbol: 'Y', name: 'Yttrium', atomicNumber: 39, atomicWeight: 88.906 },
//   { symbol: 'Zr', name: 'Zirconium', atomicNumber: 40, atomicWeight: 91.224 },
//   { symbol: 'Nb', name: 'Niobium', atomicNumber: 41, atomicWeight: 92.906 },
//   { symbol: 'Mo', name: 'Molybdenum', atomicNumber: 42, atomicWeight: 95.95 },
//   { symbol: 'Tc', name: 'Technetium', atomicNumber: 43, atomicWeight: 98 },
//   { symbol: 'Ru', name: 'Ruthenium', atomicNumber: 44, atomicWeight: 101.07 },
//   { symbol: 'Rh', name: 'Rhodium', atomicNumber: 45, atomicWeight: 102.91 },
//   { symbol: 'Pd', name: 'Palladium', atomicNumber: 46, atomicWeight: 106.42 },
//   { symbol: 'Ag', name: 'Silver', atomicNumber: 47, atomicWeight: 107.87 },
//   { symbol: 'Cd', name: 'Cadmium', atomicNumber: 48, atomicWeight: 112.41 },
//   { symbol: 'In', name: 'Indium', atomicNumber: 49, atomicWeight: 114.82 },
//   { symbol: 'Sn', name: 'Tin', atomicNumber: 50, atomicWeight: 118.71 },
//   { symbol: 'Sb', name: 'Antimony', atomicNumber: 51, atomicWeight: 121.76 },
//   { symbol: 'Te', name: 'Tellurium', atomicNumber: 52, atomicWeight: 127.6 },
//   { symbol: 'I', name: 'Iodine', atomicNumber: 53, atomicWeight: 126.9 },
//   { symbol: 'Xe', name: 'Xenon', atomicNumber: 54, atomicWeight: 131.29 },
//   { symbol: 'Cs', name: 'Cesium', atomicNumber: 55, atomicWeight: 132.91 },  
//   { symbol: 'Ba', name: 'Barium', atomicNumber: 56, atomicWeight: 137.33 },
//   { symbol: '', name: '', atomicNumber: 0, atomicWeight: 0 },
//   { symbol: 'Hf', name: 'Hafnium', atomicNumber: 72, atomicWeight: 178.49 },
//   { symbol: 'Ta', name: 'Tantalum', atomicNumber: 73, atomicWeight: 180.95 },
//   { symbol: 'W', name: 'Tungsten', atomicNumber: 74, atomicWeight: 183.84 },
//   { symbol: 'Re', name: 'Rhenium', atomicNumber: 75, atomicWeight: 186.21 },
//   { symbol: 'Os', name: 'Osmium', atomicNumber: 76, atomicWeight: 190.23 },
//   { symbol: 'Ir', name: 'Iridium', atomicNumber: 77, atomicWeight: 192.22 },
//   { symbol: 'Pt', name: 'Platinum', atomicNumber: 78, atomicWeight: 195.08 },
//   { symbol: 'Au', name: 'Gold', atomicNumber: 79, atomicWeight: 196.97 },
//   { symbol: 'Hg', name: 'Mercury', atomicNumber: 80, atomicWeight: 200.59 },
//   { symbol: 'Tl', name: 'Thallium', atomicNumber: 81, atomicWeight: 204.38 },
//   { symbol: 'Pb', name: 'Lead', atomicNumber: 82, atomicWeight: 207.2 },
//   { symbol: 'Bi', name: 'Bismuth', atomicNumber: 83, atomicWeight: 208.98 },
//   { symbol: 'Po', name: 'Polonium', atomicNumber: 84, atomicWeight: 209 },
//   { symbol: 'At', name: 'Astatine', atomicNumber: 85, atomicWeight: 210 },
//   { symbol: 'Rn', name: 'Radon', atomicNumber: 86, atomicWeight: 222 },
//   { symbol: 'Fr', name: 'Francium', atomicNumber: 87, atomicWeight: 223 },
//   { symbol: 'Ra', name: 'Radium', atomicNumber: 88, atomicWeight: 226 },
//   { symbol: '', name: '', atomicNumber: 0, atomicWeight: 0 },
//   { symbol: 'Rf', name: 'Rutherfordium', atomicNumber: 104, atomicWeight: 261 },
//   { symbol: 'Db', name: 'Dubnium', atomicNumber: 105, atomicWeight: 262 },
//   { symbol: 'Sg', name: 'Seaborgium', atomicNumber: 106, atomicWeight: 266 },
//   { symbol: 'Bh', name: 'Bohrium', atomicNumber: 107, atomicWeight: 264 },
//   { symbol: 'Hs', name: 'Hassium', atomicNumber: 108, atomicWeight: 269 },
//   { symbol: 'Mt', name: 'Meitnerium', atomicNumber: 109, atomicWeight: 268 },
//   { symbol: 'Ds', name: 'Darmstadtium', atomicNumber: 110, atomicWeight: 271 },
//   { symbol: 'Rg', name: 'Roentgenium', atomicNumber: 111, atomicWeight: 272 },
//   { symbol: 'Cn', name: 'Copernicium', atomicNumber: 112, atomicWeight: 277 },
//   { symbol: 'Nh', name: 'Nihonium', atomicNumber: 113, atomicWeight: 276 },
//   { symbol: 'Fl', name: 'Flerovium', atomicNumber: 114, atomicWeight: 281 },
//   { symbol: 'Mc', name: 'Moscovium', atomicNumber: 115, atomicWeight: 280 },
//   { symbol: 'Lv', name: 'Livermorium', atomicNumber: 116, atomicWeight: 288 },
//   { symbol: 'Ts', name: 'Tennessine', atomicNumber: 117, atomicWeight: 293 },
//   { symbol: 'Og', name: 'Oganesson', atomicNumber: 118, atomicWeight: 294 },
//   { symbol: '', name: '', atomicNumber: 0, atomicWeight: 0 },
//   { symbol: '', name: '', atomicNumber: 0, atomicWeight: 0 },  
//   { symbol: '', name: '', atomicNumber: 0, atomicWeight: 0 },
//   { symbol: 'La', name: 'Lanthanum', atomicNumber: 57, atomicWeight: 138.91 },
//   { symbol: 'Ce', name: 'Cerium', atomicNumber: 58, atomicWeight: 140.12 },
//   { symbol: 'Pr', name: 'Praseodymium', atomicNumber: 59, atomicWeight: 140.91 },
//   { symbol: 'Nd', name: 'Neodymium', atomicNumber: 60, atomicWeight: 144.24 },
//   { symbol: 'Pm', name: 'Promethium', atomicNumber: 61, atomicWeight: 145 },
//   { symbol: 'Sm', name: 'Samarium', atomicNumber: 62, atomicWeight: 150.36 },
//   { symbol: 'Eu', name: 'Europium', atomicNumber: 63, atomicWeight: 151.96 },
//   { symbol: 'Gd', name: 'Gadolinium', atomicNumber: 64, atomicWeight: 157.25 },
//   { symbol: 'Tb', name: 'Terbium', atomicNumber: 65, atomicWeight: 158.93 },
//   { symbol: 'Dy', name: 'Dysprosium', atomicNumber: 66, atomicWeight: 162.5 },
//   { symbol: 'Ho', name: 'Holmium', atomicNumber: 67, atomicWeight: 164.93 },  
//   { symbol: 'Er', name: 'Erbium', atomicNumber: 68, atomicWeight: 167.26 },
//   { symbol: 'Tm', name: 'Thulium', atomicNumber: 69, atomicWeight: 168.93 },
//   { symbol: 'Yb', name: 'Ytterbium', atomicNumber: 70, atomicWeight: 173.05 },
//   { symbol: 'Lu', name: 'Lutetium', atomicNumber: 71, atomicWeight: 174.97 },
//   { symbol: '', name: '', atomicNumber: 0, atomicWeight: 0 },
//   { symbol: '', name: '', atomicNumber: 0, atomicWeight: 0 },  
//   { symbol: '', name: '', atomicNumber: 0, atomicWeight: 0 },
//   { symbol: 'Ac', name: 'Actinium', atomicNumber: 89, atomicWeight: 227 },
//   { symbol: 'Th', name: 'Thorium', atomicNumber: 90, atomicWeight: 232.04 },
//   { symbol: 'Pa', name: 'Protactinium', atomicNumber: 91, atomicWeight: 231.04 },
//   { symbol: 'U', name: 'Uranium', atomicNumber: 92, atomicWeight: 238.03 },
//   { symbol: 'Np', name: 'Neptunium', atomicNumber: 93, atomicWeight: 237 },
//   { symbol: 'Pu', name: 'Plutonium', atomicNumber: 94, atomicWeight: 244 },
//   { symbol: 'Am', name: 'Americium', atomicNumber: 95, atomicWeight: 243 },
//   { symbol: 'Cm', name: 'Curium', atomicNumber: 96, atomicWeight: 247 },
//   { symbol: 'Bk', name: 'Berkelium', atomicNumber: 97, atomicWeight: 247 },
//   { symbol: 'Cf', name: 'Californium', atomicNumber: 98, atomicWeight: 251 },
//   { symbol: 'Es', name: 'Einsteinium', atomicNumber: 99, atomicWeight: 252 },
//   { symbol: 'Fm', name: 'Fermium', atomicNumber: 100, atomicWeight: 257 },
//   { symbol: 'Md', name: 'Mendelevium', atomicNumber: 101, atomicWeight: 258 },
//   { symbol: 'No', name: 'Nobelium', atomicNumber: 102, atomicWeight: 259 },
//   { symbol: 'Lr', name: 'Lawrencium', atomicNumber: 103, atomicWeight: 262 } 
// ];
{/* <Elements /> */}

function PeriodicTable() {
  const [selectedElement, setSelectedElement] = useState(null);

  const handleElementClick = (element) => {
    setSelectedElement(element);
  };

  const getButtonClass =(atomicNumber) => {   
    if ((atomicNumber >= 21 && atomicNumber <= 30) ||
        (atomicNumber >= 39 && atomicNumber <= 48) ||
        (atomicNumber >= 72 && atomicNumber <= 80) ||
        (atomicNumber >= 104 && atomicNumber <= 112))
        return 'transition-metals';
    switch (atomicNumber) {
      case 3:
      case 11:
      case 19:
      case 37:     
      case 55:
      case 87:             
      return 'alkaline-metals';   
      case 4:
      case 12:
      case 20:
      case 38:
      case 56:
      case 88:    
      return 'alkaline-earth-metals';      
      case 2:
      case 10:
      case 18:
      case 36:
      case 54:
      case 86:
      case 118:
      return 'noble-gases';      
      case 9:
      case 17:
      case 35:
      case 53:
      case 85:
      case 117:     
      return 'halogens';           
      case 5:
      case 14:
      case 32:
      case 33:
      case 51:
      case 52:     
      return 'metalloids';      
      case 1:
      case 6:
      case 7:
      case 8:
      case 15:
      case 16:
      case 34:     
      return 'non-metals';     
      case 57:
      case 58:
      case 59:
      case 60:
      case 61:
      case 62:
      case 63:
      case 64:
      case 65:
      case 66:
      case 67:
      case 68:
      case 69:
      case 70:
      case 71:
      return 'lanthanoids';       
      case 89:
      case 90:
      case 91:
      case 92:
      case 93:
      case 94:
      case 95:
      case 96:
      case 97:
      case 98:
      case 99:
      case 100:
      case 101:
      case 102:
      case 103:
      return 'actinoids';        
      case 13:
      case 31:
      case 49:
      case 50:
      case 81:
      case 82:
      case 83:
      case 84:
      case 113:
      case 115:
      case 114:
      case 116:
      return 'post-transition-metals';       
      case 0: 
      return 'blankSpace';  
      default:
        return '';  
    }
  }  

  const createRows = () => {
    const rows = [];
    for (let i = 0; i < elements.length; i += 18) {
      rows.push(elements.slice(i, i + 18));
    }
    return rows;
  };

  return (
    <div className="periodic-table">
      <h2>Periodic Table of Elements</h2>
      <hr></hr>
      {/* <div className="element-details">
      <h3>Element Details</h3>
      <ElementDetails element={selectedElement} />
      </div> */}
     
      <table>
        <tbody>
          {createRows().map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((element, index) => (
                <td key={index}>
                  <button 
                  className={getButtonClass(element.atomicNumber) } buttons
                  onClick={() => handleElementClick(element)}>
                    {element.symbol} <span className="atomic-number">{element.atomicNumber}</span> 
                  </button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <hr></hr>
      <hr></hr>
      <div className="element-details">
      <h3>Element Details</h3>
      <ElementDetails element={selectedElement} />
      </div>
     
    </div>
  );
}           

export default PeriodicTable;
