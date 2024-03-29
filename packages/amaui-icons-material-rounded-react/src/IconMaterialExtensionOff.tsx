import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExtensionOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExtensionOff'

      short_name='ExtensionOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20 17.15-2-2V13h2q.2 0 .35-.15.15-.15.15-.35 0-.2-.15-.35Q20.2 12 20 12h-2V6h-6V4q0-.2-.15-.35-.15-.15-.35-.15-.2 0-.35.15Q11 3.8 11 4v2H8.85l-2-2H9q0-1.05.725-1.775Q10.45 1.5 11.5 1.5q1.05 0 1.775.725Q14 2.95 14 4h4q.825 0 1.413.588Q20 5.175 20 6v4q1.05 0 1.775.725.725.725.725 1.775 0 1.05-.725 1.775Q21.05 15 20 15Zm-6.55-6.55Zm5.625 11.3-17-16.975q-.3-.3-.3-.713 0-.412.3-.712t.713-.3q.412 0 .712.3l17 17q.3.3.3.7 0 .4-.3.7-.3.3-.712.3-.413 0-.713-.3Zm-8.5-8.475ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19v-3.8q1.2 0 2.1-.762.9-.763.9-1.938 0-1.175-.9-1.938Q4.2 9.8 3 9.8V6q0-.425.15-.788.15-.362.425-.637L5 6v2.2q1.35.5 2.175 1.675Q8 11.05 8 12.5q0 1.425-.825 2.6T5 16.8V19h2.2q.525-1.35 1.7-2.175Q10.075 16 11.5 16t2.6.825q1.175.825 1.7 2.175H18l1.425 1.425q-.275.275-.637.425-.363.15-.788.15h-3.8q0-1.2-.762-2.1-.763-.9-1.938-.9-1.175 0-1.938.9-.762.9-.762 2.1Z"/>
    </Icon>
  );
});

IconMaterialExtensionOff.displayName = 'AmauiIconMaterialExtensionOff';

export default IconMaterialExtensionOff;
