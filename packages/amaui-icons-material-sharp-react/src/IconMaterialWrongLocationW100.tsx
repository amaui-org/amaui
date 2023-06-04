import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWrongLocationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WrongLocationW100'

      short_name='WrongLocation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m15.75 7.75 2.1-2.1 2.1 2.1.5-.5-2.1-2.1 2.1-2.1-.5-.5-2.1 2.1-2.1-2.1-.5.5 2.1 2.1-2.1 2.1ZM12 11.35q.575 0 .963-.388.387-.387.387-.962t-.387-.963Q12.575 8.65 12 8.65t-.962.387q-.388.388-.388.963t.388.962q.387.388.962.388Zm0 10.15q-3.725-3.35-5.537-6.213Q4.65 12.425 4.65 10.2q0-3.45 2.225-5.5T12 2.65q.25 0 .5.012.25.013.5.063v.7q-.25-.05-.488-.063-.237-.012-.512-.012-2.8 0-4.725 1.912Q5.35 7.175 5.35 10.2q0 1.9 1.75 4.762 1.75 2.863 4.9 5.563 3.15-2.7 4.9-5.563 1.75-2.862 1.75-4.762V10h.7v.2q0 2.225-1.812 5.087Q15.725 18.15 12 21.5Zm0-11.425Z"/>
    </Icon>
  );
});

IconMaterialWrongLocationW100.displayName = 'AmauiIconMaterialWrongLocationW100';

export default IconMaterialWrongLocationW100;
