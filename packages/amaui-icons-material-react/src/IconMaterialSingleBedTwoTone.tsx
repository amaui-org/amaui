import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSingleBedTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SingleBedTwoTone'
      short_name='SingleBed'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><rect height="3" opacity=".3" width="12" x="6" y="12"/><path d="M18,10V7c0-1.1-0.9-2-2-2H8C6.9,5,6,5.9,6,7v3c-1.1,0-2,0.9-2,2v5h1.33L6,19h1l0.67-2h8.67L17,19h1l0.67-2H20v-5 C20,10.9,19.1,10,18,10z M13,7h3v3h-3V7z M8,7h3v3H8V7z M18,15H6v-3h12V15z"/></g></g>
    </Icon>
  );
});

export default IconMaterialSingleBedTwoTone;
