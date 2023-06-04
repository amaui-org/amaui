import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSnippetFolderW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SnippetFolderW100Filled'

      short_name='SnippetFolder'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.1 15.9v-5.8h1.95l1.85 1.85v3.95Zm.05.7h3.7q.325 0 .538-.212.212-.213.212-.538v-3.875q0-.15-.05-.275-.05-.125-.175-.25L16.55 9.625q-.125-.125-.25-.175-.125-.05-.275-.05H14.15q-.325 0-.537.212-.213.213-.213.538v5.7q0 .325.213.538.212.212.537.212ZM4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V7.8q0-.65.425-1.075Q4.15 6.3 4.8 6.3h5.9q.125 0 .263.05.137.05.237.15l.8.8h7.2q.65 0 1.075.425.425.425.425 1.075v8.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialSnippetFolderW100Filled.displayName = 'AmauiIconMaterialSnippetFolderW100Filled';

export default IconMaterialSnippetFolderW100Filled;
