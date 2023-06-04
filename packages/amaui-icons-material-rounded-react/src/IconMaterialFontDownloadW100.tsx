import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFontDownloadW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FontDownloadW100'

      short_name='FontDownload'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.225 17.45q.125 0 .213-.075.087-.075.137-.175l.975-2.75h4.9l.975 2.75q.05.1.137.175.088.075.213.075.2 0 .3-.125.1-.125.025-.325L12.325 6.475q-.05-.1-.125-.163-.075-.062-.2-.062-.1 0-.188.062-.087.063-.137.163L7.9 17q-.075.2.025.325t.3.125Zm1.575-3.7 2.15-6.05h.1l2.15 6.05Zm-5 6.95q-.625 0-1.063-.438Q3.3 19.825 3.3 19.2V4.8q0-.625.437-1.063Q4.175 3.3 4.8 3.3h14.4q.625 0 1.063.437.437.438.437 1.063v14.4q0 .625-.437 1.062-.438.438-1.063.438Zm0-.7h14.4q.3 0 .55-.25.25-.25.25-.55V4.8q0-.3-.25-.55Q19.5 4 19.2 4H4.8q-.3 0-.55.25Q4 4.5 4 4.8v14.4q0 .3.25.55.25.25.55.25ZM4 4v16V4Z"/>
    </Icon>
  );
});

IconMaterialFontDownloadW100.displayName = 'AmauiIconMaterialFontDownloadW100';

export default IconMaterialFontDownloadW100;
