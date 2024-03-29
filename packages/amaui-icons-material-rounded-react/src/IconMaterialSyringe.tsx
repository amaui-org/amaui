import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSyringe = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Syringe'

      short_name='Syringe'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M156 543q-11-12-11-28.5t11-28.5l112-112-43-43-12 12q-12 12-28.5 12T156 343q-11-11-11-28t11-28l80-80q12-12 28.5-12t28.5 12q11 11 11 28t-11 28l-12 12 43 43 112-112q12-12 28.5-12t28.5 12q12 12 12 28.5T493 263l-27 26 295 295q23 23 23 56.5T761 697l-28 29 155 154q10 10 5 22t-19 12h-41q-12 0-23.5-5T790 896L676 782l-28 29q-23 23-56.5 23T535 811L240 516l-27 27q-12 11-28.5 11T156 543Zm140-83 295 295 113-114-60-61-56 56q-12 11-28.5 11.5T532 637q-12-12-12-28.5t12-28.5l56-56-60-60-56 56q-12 11-28.5 11T415 520q-11-12-11-28.5t11-28.5l56-56-61-61-114 114Zm0 0 114-114-114 114Z"/>
    </Icon>
  );
});

IconMaterialSyringe.displayName = 'AmauiIconMaterialSyringe';

export default IconMaterialSyringe;
