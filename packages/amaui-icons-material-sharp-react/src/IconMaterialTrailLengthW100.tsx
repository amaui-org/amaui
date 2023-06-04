import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTrailLengthW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrailLengthW100'

      short_name='TrailLength'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.15 16.35v-.7h7.475q-1-.675-1.462-1.55-.463-.875-.513-1.75h-3.8v-.7h3.8q.1-.925.563-1.8.462-.875 1.412-1.5H3.65v-.7H17q1.8 0 3.075 1.275Q21.35 10.2 21.35 12q0 1.8-1.275 3.075Q18.8 16.35 17 16.35Zm9.85-.7q1.5 0 2.575-1.075Q20.65 13.5 20.65 12q0-1.5-1.075-2.575Q18.5 8.35 17 8.35q-1.5 0-2.575 1.075Q13.35 10.5 13.35 12q0 1.5 1.075 2.575Q15.5 15.65 17 15.65Zm-14.35-3.3v-.7h5.2v.7Zm1 4v-.7h2.5v.7ZM17 12Z"/>
    </Icon>
  );
});

IconMaterialTrailLengthW100.displayName = 'AmauiIconMaterialTrailLengthW100';

export default IconMaterialTrailLengthW100;
