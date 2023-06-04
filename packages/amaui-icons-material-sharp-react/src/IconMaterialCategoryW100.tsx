import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCategoryW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CategoryW100'

      short_name='Category'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.3 10 12 3.9l3.7 6.1Zm9.2 11q-1.475 0-2.487-1.012Q14 18.975 14 17.5t1.013-2.488Q16.025 14 17.5 14t2.488 1.012Q21 16.025 21 17.5t-1.012 2.488Q18.975 21 17.5 21ZM4 20.5v-6h6v6Zm13.5-.2q1.175 0 1.988-.812.812-.813.812-1.988t-.812-1.988q-.813-.812-1.988-.812t-1.988.812q-.812.813-.812 1.988t.812 1.988q.813.812 1.988.812Zm-12.8-.5h4.6v-4.6H4.7ZM9.5 9.3h5l-2.5-4Zm2.5 0Zm-2.7 5.9Zm8.2 2.3Z"/>
    </Icon>
  );
});

IconMaterialCategoryW100.displayName = 'AmauiIconMaterialCategoryW100';

export default IconMaterialCategoryW100;
