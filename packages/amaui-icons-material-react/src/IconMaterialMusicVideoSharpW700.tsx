import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMusicVideoSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MusicVideoSharpW700'
      short_name='MusicVideo'

      {...props}
    >
      <path d="M1.15 20.85V3.15H22.85V20.85ZM4.3 17.7V6.3ZM4.3 6.3V17.7H19.7V6.3ZM10.5 16.925Q11.55 16.925 12.275 16.2Q13 15.475 13 14.425V9.125H16V7.125H12V12.425Q11.675 12.2 11.3 12.062Q10.925 11.925 10.5 11.925Q9.45 11.925 8.725 12.65Q8 13.375 8 14.425Q8 15.475 8.725 16.2Q9.45 16.925 10.5 16.925Z"/>
    </Icon>
  )
});

export default IconMaterialMusicVideoSharpW700;
