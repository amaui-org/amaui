import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsCricketW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsCricketW100'

      short_name='SportsCricket'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.5 16.6 2.7 7.8l3.1-3.1 8.8 8.8Zm0-1 2.1-2.1-7.8-7.8-2.1 2.1Zm7.1 5.5-4.35-4.35.5-.5 4.35 4.35Zm-.1-13.05q-1.05 0-1.8-.75t-.75-1.8q0-1.05.75-1.8t1.8-.75q1.05 0 1.8.75t.75 1.8q0 1.05-.75 1.8t-1.8.75Zm0-.7q.775 0 1.312-.538.538-.537.538-1.312t-.538-1.313q-.537-.537-1.312-.537t-1.312.537q-.538.538-.538 1.313 0 .775.538 1.312.537.538 1.312.538Zm0-1.85Zm-9.85 5.15Z"/>
    </Icon>
  );
});

IconMaterialSportsCricketW100.displayName = 'AmauiIconMaterialSportsCricketW100';

export default IconMaterialSportsCricketW100;
