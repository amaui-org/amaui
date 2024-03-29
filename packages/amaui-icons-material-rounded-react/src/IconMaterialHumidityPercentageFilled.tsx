import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHumidityPercentageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HumidityPercentageFilled'

      short_name='HumidityPercentage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.5 18q.625 0 1.062-.438Q16 17.125 16 16.5t-.438-1.062Q15.125 15 14.5 15t-1.062.438Q13 15.875 13 16.5t.438 1.062Q13.875 18 14.5 18Zm-5.75-.75q.3.3.7.3.4 0 .7-.3l5.1-5.1q.3-.3.3-.7 0-.4-.3-.7-.3-.3-.712-.3-.413 0-.713.3L8.75 15.825q-.3.3-.3.713 0 .412.3.712ZM9.5 13q.625 0 1.062-.438Q11 12.125 11 11.5t-.438-1.062Q10.125 10 9.5 10t-1.062.438Q8 10.875 8 11.5t.438 1.062Q8.875 13 9.5 13Zm2.5 9q-3.175 0-5.587-2.212Q4 17.575 4 13.8q0-2.375 1.8-5.15 1.8-2.775 5.45-6 .15-.125.35-.2.2-.075.4-.075t.4.075q.2.075.35.2 3.65 3.225 5.45 6Q20 11.425 20 13.8q0 3.775-2.413 5.988Q15.175 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialHumidityPercentageFilled.displayName = 'AmauiIconMaterialHumidityPercentageFilled';

export default IconMaterialHumidityPercentageFilled;
