import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNorth = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='North'

      short_name='North'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-.425 0-.712-.288Q11 21.425 11 21V5.825L7.1 9.7q-.275.275-.688.288Q6 10 5.7 9.7q-.275-.275-.275-.7 0-.425.275-.7l5.6-5.6q.15-.15.325-.213.175-.062.375-.062t.375.062q.175.063.325.213l5.6 5.6q.275.275.275.687 0 .413-.275.713-.3.3-.713.3-.412 0-.712-.3L13 5.825V21q0 .425-.287.712Q12.425 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialNorth.displayName = 'AmauiIconMaterialNorth';

export default IconMaterialNorth;
