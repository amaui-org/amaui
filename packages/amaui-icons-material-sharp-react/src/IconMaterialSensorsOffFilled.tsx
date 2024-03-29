import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSensorsOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SensorsOffFilled'

      short_name='SensorsOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.775 22.625-11.65-11.65q-.05.25-.087.5Q8 11.725 8 12q0 .825.312 1.55.313.725.863 1.275L7.75 16.25q-.8-.825-1.275-1.913Q6 13.25 6 12q0-.7.15-1.35.15-.65.425-1.225L5.1 7.95q-.525.9-.813 1.913Q4 10.875 4 12q0 1.675.625 3.125T6.35 17.65l-1.425 1.425q-1.35-1.375-2.137-3.188Q2 14.075 2 12q0-1.55.438-2.925Q2.875 7.7 3.65 6.5L1.375 4.225 2.8 2.8l18.4 18.4Zm.575-5.125-1.45-1.45q.525-.9.812-1.913Q20 13.125 20 12q0-1.675-.625-3.125T17.65 6.35l1.425-1.425q1.35 1.35 2.137 3.162Q22 9.9 22 12q0 1.525-.438 2.912-.437 1.388-1.212 2.588Zm-2.925-2.925-1.55-1.55q.05-.25.088-.5Q16 12.275 16 12q0-.825-.312-1.55-.313-.725-.863-1.275L16.25 7.75q.8.8 1.275 1.887Q18 10.725 18 12q0 .7-.15 1.35-.15.65-.425 1.225Z"/>
    </Icon>
  );
});

IconMaterialSensorsOffFilled.displayName = 'AmauiIconMaterialSensorsOffFilled';

export default IconMaterialSensorsOffFilled;
