import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsVolleyball = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsVolleyball'

      short_name='SportsVolleyball'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.55 9.45q-.775-2.175-2.525-3.638Q15.275 4.35 13 4.05v1.6ZM8 13.15l3-1.75V4.05q-.8.075-1.55.362Q8.7 4.7 8 5.1ZM4.65 15.1 6 14.3V6.75q-.975 1.1-1.487 2.45Q4 10.55 4 12q0 .8.162 1.587.163.788.488 1.513ZM8 18.9l7-4-3-1.75-6.35 3.7q.5.625 1.075 1.15.575.525 1.275.9Zm4 1.1q1.875 0 3.55-.85 1.675-.85 2.8-2.35L17 16.05l-6.6 3.8q.4.075.8.112.4.038.8.038Zm7.35-4.9q.325-.725.487-1.513Q20 12.8 20 12l-7-4.05v3.45ZM12 12Zm0 10q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialSportsVolleyball.displayName = 'AmauiIconMaterialSportsVolleyball';

export default IconMaterialSportsVolleyball;
