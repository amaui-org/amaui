import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeselectW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeselectW100'

      short_name='Deselect'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 13v-2H5v2ZM7 19.7V19h2v.7ZM11 5v-.7h2V5Zm8 0v-.7q.3 0 .5.2t.2.5ZM5 19.7q-.3 0-.5-.2t-.2-.5H5ZM4.3 17v-2H5v2Zm6.7 2.7V19h2v.7Zm8-6.7v-2h.7v2Zm0-4.25v-2h.7v2ZM15 5v-.7h2V5Zm-6-.7V5H7.825l-.7-.7ZM19.7 15v1.875l-.7-.7V15ZM9 15h5l-5-5Zm6 4.7V19h2v.7Zm.7-6.825-.7-.7V9h-3.175l-.7-.7h3.825q.325 0 .538.212.212.213.212.538ZM4.3 9V7H5v2Zm15.3 11.6-4.9-4.9H9.05q-.325 0-.538-.212-.212-.213-.212-.538V9.3L3.4 4.4q-.125-.125-.125-.25T3.4 3.9q.125-.1.25-.113.125-.012.25.113l16.2 16.2q.1.1.1.237 0 .138-.1.263-.125.125-.25.125t-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialDeselectW100.displayName = 'AmauiIconMaterialDeselectW100';

export default IconMaterialDeselectW100;
