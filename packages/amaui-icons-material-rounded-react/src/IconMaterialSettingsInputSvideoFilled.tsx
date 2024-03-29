import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsInputSvideoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsInputSvideoFilled'

      short_name='SettingsInputSvideo'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-2.05 0-3.875-.788-1.825-.787-3.187-2.15-1.363-1.362-2.15-3.187Q2 14.05 2 12q0-2.075.788-3.887.787-1.813 2.15-3.175Q6.3 3.575 8.125 2.787 9.95 2 12 2q2.075 0 3.887.787 1.813.788 3.175 2.151 1.363 1.362 2.15 3.175Q22 9.925 22 12q0 2.05-.788 3.875-.787 1.825-2.15 3.187-1.362 1.363-3.175 2.15Q14.075 22 12 22Zm-4.5-9q.625 0 1.062-.438Q9 12.125 9 11.5t-.438-1.062Q8.125 10 7.5 10t-1.062.438Q6 10.875 6 11.5t.438 1.062Q6.875 13 7.5 13Zm9 0q.625 0 1.062-.438Q18 12.125 18 11.5t-.438-1.062Q17.125 10 16.5 10t-1.062.438Q15 10.875 15 11.5t.438 1.062Q15.875 13 16.5 13ZM9 17.5q.625 0 1.062-.438.438-.437.438-1.062t-.438-1.062Q9.625 14.5 9 14.5t-1.062.438Q7.5 15.375 7.5 16t.438 1.062Q8.375 17.5 9 17.5Zm6 0q.625 0 1.062-.438.438-.437.438-1.062t-.438-1.062Q15.625 14.5 15 14.5t-1.062.438Q13.5 15.375 13.5 16t.438 1.062q.437.438 1.062.438ZM10.5 9h3q.65 0 1.075-.425Q15 8.15 15 7.5q0-.65-.425-1.075Q14.15 6 13.5 6h-3q-.65 0-1.075.425Q9 6.85 9 7.5q0 .65.425 1.075Q9.85 9 10.5 9Z"/>
    </Icon>
  );
});

IconMaterialSettingsInputSvideoFilled.displayName = 'AmauiIconMaterialSettingsInputSvideoFilled';

export default IconMaterialSettingsInputSvideoFilled;
