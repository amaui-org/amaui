import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUmbrellaW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UmbrellaW100'

      short_name='Umbrella'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21.35q-.125 0-.2-.05-.075-.05-.125-.175l-4.7-14.15 2.675.65 2-1.525V3.4q0-.725.538-1.238.537-.512 1.312-.512t1.312.512q.538.513.538 1.238V4h-.7v-.6q0-.5-.338-.813-.337-.312-.812-.312-.475 0-.812.337-.338.338-.338.788v2.7l2 1.525 2.675-.65-4.7 14.125q-.05.125-.125.188-.075.062-.2.062Zm.35-2.475 3.575-10.95-1.725.45L12.35 7Zm-.7 0V7L9.8 8.4l-1.775-.5Z"/>
    </Icon>
  );
});

IconMaterialUmbrellaW100.displayName = 'AmauiIconMaterialUmbrellaW100';

export default IconMaterialUmbrellaW100;
