import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCallMissed = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallMissed'

      short_name='CallMissed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 17q-.2 0-.375-.062-.175-.063-.325-.213l-6.3-6.3V14q0 .425-.287.712Q4.425 15 4 15t-.712-.288Q3 14.425 3 14V8q0-.425.288-.713Q3.575 7 4 7h6q.425 0 .713.287Q11 7.575 11 8t-.287.712Q10.425 9 10 9H6.4l5.6 5.6 6.9-6.9q.275-.275.7-.288.425-.012.7.288.3.275.3.7 0 .425-.3.725l-7.6 7.6q-.15.15-.325.213Q12.2 17 12 17Z"/>
    </Icon>
  );
});

IconMaterialCallMissed.displayName = 'AmauiIconMaterialCallMissed';

export default IconMaterialCallMissed;
