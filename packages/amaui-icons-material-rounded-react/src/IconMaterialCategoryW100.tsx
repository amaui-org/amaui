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
      <path d="M9.625 10q-.425 0-.637-.387-.213-.388.012-.763l2.35-3.9q.2-.375.65-.375t.65.375L15 8.85q.225.375.013.763-.213.387-.638.387ZM17.5 21q-1.475 0-2.487-1.012Q14 18.975 14 17.5t1.013-2.488Q16.025 14 17.5 14t2.488 1.012Q21 16.025 21 17.5t-1.012 2.488Q18.975 21 17.5 21Zm-12.75-.5q-.325 0-.537-.212Q4 20.075 4 19.75v-4.5q0-.325.213-.538.212-.212.537-.212h4.5q.325 0 .538.212.212.213.212.538v4.5q0 .325-.212.538-.213.212-.538.212Zm12.75-.2q1.175 0 1.988-.812.812-.813.812-1.988t-.812-1.988q-.813-.812-1.988-.812t-1.988.812q-.812.813-.812 1.988t.812 1.988q.813.812 1.988.812Zm-12.8-.5h4.6v-4.6H4.7ZM9.5 9.3h5l-2.5-4Zm2.5 0Zm-2.7 5.9Zm8.2 2.3Z"/>
    </Icon>
  );
});

IconMaterialCategoryW100.displayName = 'AmauiIconMaterialCategoryW100';

export default IconMaterialCategoryW100;
