import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUmbrellaW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UmbrellaW100Filled'

      short_name='Umbrella'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21.35q-.125 0-.2-.05-.075-.05-.125-.175L7.2 7.675q-.075-.225.087-.4.163-.175.388-.125l1.975.475 2-1.525V3.4q0-.725.538-1.238.537-.512 1.312-.512t1.312.525q.538.525.538 1.475 0 .15-.1.25T15 4q-.15 0-.25-.1t-.1-.25q0-.65-.3-1.013-.3-.362-.85-.362-.475 0-.812.337-.338.338-.338.788v2.7l2 1.525 1.975-.475q.225-.05.375.125t.075.4L12.325 21.1q-.05.125-.125.188-.075.062-.2.062Zm.35-2.475 3.575-10.95-1.725.45L12.35 7Zm-.7 0V7L9.8 8.4l-1.775-.5Z"/>
    </Icon>
  );
});

IconMaterialUmbrellaW100Filled.displayName = 'AmauiIconMaterialUmbrellaW100Filled';

export default IconMaterialUmbrellaW100Filled;
