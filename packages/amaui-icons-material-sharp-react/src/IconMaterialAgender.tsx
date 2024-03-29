import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAgender = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Agender'

      short_name='Agender'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21q-2.5 0-4.25-1.75T6 15q0-2.25 1.438-3.913Q8.875 9.425 11 9.075V3h2v6.075q2.15.35 3.575 2.012Q18 12.75 18 15q0 2.5-1.75 4.25T12 21Zm0-2q1.4 0 2.463-.85 1.062-.85 1.412-2.15h-7.75q.35 1.3 1.413 2.15Q10.6 19 12 19Zm-3.875-5h7.75q-.35-1.3-1.412-2.15Q13.4 11 12 11q-1.4 0-2.462.85-1.063.85-1.413 2.15Z"/>
    </Icon>
  );
});

IconMaterialAgender.displayName = 'AmauiIconMaterialAgender';

export default IconMaterialAgender;
