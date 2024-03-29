import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiTetheringOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiTetheringOffFilled'

      short_name='WifiTetheringOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.775 22.625-11.65-11.65q-.05.25-.087.5Q8 11.725 8 12q0 .9.363 1.662.362.763.987 1.338l-1.425 1.425q-.875-.825-1.4-1.963Q6 13.325 6 12q0-.7.15-1.35.15-.65.425-1.225L5.1 7.95q-.525.9-.813 1.913Q4 10.875 4 12q0 1.725.675 3.225t1.85 2.6L5.1 19.25q-1.425-1.375-2.262-3.238Q2 14.15 2 12q0-1.55.425-2.925Q2.85 7.7 3.65 6.5L1.375 4.225 2.8 2.8l18.4 18.4Zm.575-5.125-1.45-1.45q.525-.875.812-1.9Q20 13.125 20 12q0-3.35-2.325-5.675Q15.35 4 12 4q-1.125 0-2.137.287-1.013.288-1.913.813L6.5 3.65q1.2-.8 2.588-1.225Q10.475 2 12 2q2.075 0 3.9.787 1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12q0 1.525-.425 2.912Q21.15 16.3 20.35 17.5Zm-2.925-2.925-1.55-1.55q.05-.25.088-.5Q16 12.275 16 12q0-1.65-1.175-2.825Q13.65 8 12 8q-.275 0-.525.037-.25.038-.5.088l-1.55-1.55Q10 6.3 10.65 6.15 11.3 6 12 6q2.5 0 4.25 1.75T18 12q0 .7-.15 1.35-.15.65-.425 1.225Z"/>
    </Icon>
  );
});

IconMaterialWifiTetheringOffFilled.displayName = 'AmauiIconMaterialWifiTetheringOffFilled';

export default IconMaterialWifiTetheringOffFilled;
