import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPregnantWomanW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PregnantWomanW100'

      short_name='PregnantWoman'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 5.7q-.675 0-1.137-.463Q9.4 4.775 9.4 4.1t.463-1.138Q10.325 2.5 11 2.5t1.138.462q.462.463.462 1.138 0 .675-.462 1.137Q11.675 5.7 11 5.7Zm-.05 15.65V15.7H9.3V9.25q0-.725.488-1.213.487-.487 1.212-.487t1.213.487q.487.488.487 1.213.9.2 1.45.95.55.75.55 1.7v3.8H12v5.65Z"/>
    </Icon>
  );
});

IconMaterialPregnantWomanW100.displayName = 'AmauiIconMaterialPregnantWomanW100';

export default IconMaterialPregnantWomanW100;
