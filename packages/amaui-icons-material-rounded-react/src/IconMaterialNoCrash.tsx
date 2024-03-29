import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoCrash = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoCrash'

      short_name='NoCrash'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 3.55 14.85.7q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7L12.7 5.65q-.3.3-.712.3-.413 0-.713-.3l-1.4-1.4q-.3-.3-.3-.713 0-.412.3-.712t.7-.3q.4 0 .7.3ZM4 24q-.425 0-.712-.288Q3 23.425 3 23v-8l2.1-6q.15-.45.538-.725Q6.025 8 6.5 8h11q.475 0 .863.275.387.275.537.725l2.1 6v8q0 .425-.288.712Q20.425 24 20 24h-1q-.425 0-.712-.288Q18 23.425 18 23v-1H6v1q0 .425-.287.712Q5.425 24 5 24Zm1.8-11h12.4l-1.05-3H6.85ZM5 20v-5 5Zm2.5-1q.625 0 1.062-.438Q9 18.125 9 17.5t-.438-1.062Q8.125 16 7.5 16t-1.062.438Q6 16.875 6 17.5t.438 1.062Q6.875 19 7.5 19Zm9 0q.625 0 1.062-.438Q18 18.125 18 17.5t-.438-1.062Q17.125 16 16.5 16t-1.062.438Q15 16.875 15 17.5t.438 1.062Q15.875 19 16.5 19ZM5 20h14v-5H5Z"/>
    </Icon>
  );
});

IconMaterialNoCrash.displayName = 'AmauiIconMaterialNoCrash';

export default IconMaterialNoCrash;
