import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFontDownloadOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FontDownloadOffW100'

      short_name='FontDownloadOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m21.05 22.05-1.425-1.425q-.1.05-.2.063-.1.012-.225.012H4.8q-.625 0-1.063-.438Q3.3 19.825 3.3 19.2V4.8q0-.125.012-.225.013-.1.063-.2L2.5 3.5q-.1-.1-.112-.238Q2.375 3.125 2.5 3t.25-.125q.125 0 .25.125l18.55 18.55q.1.1.113.238.012.137-.113.262t-.25.125q-.125 0-.25-.125ZM4.8 20H19L4 5v14.2q0 .3.25.55.25.25.55.25Zm15.9-2.1-.7-.7V4.8q0-.3-.25-.55Q19.5 4 19.2 4H6.8l-.7-.7h13.1q.625 0 1.063.437.437.438.437 1.063Zm-6.675-6.675L12.9 10.1l-.85-2.4h-.1l-.375 1.075-.525-.525.625-1.775q.05-.1.125-.163.075-.062.2-.062t.2.062q.075.063.125.163ZM11.5 12.5Zm1.9-1.9Zm2.35 6.85q-.125 0-.2-.05-.075-.05-.125-.175l-.975-2.775 1.125 1.125.5 1.4q.05.2-.037.337-.088.138-.288.138Zm-6.2-3-.975 2.775-.05.1q-.025.05-.075.075-.05.025-.1.038-.05.012-.1.012-.2 0-.287-.15-.088-.15-.038-.325L10.3 10.3l.525.525L9.8 13.75h3.95l.7.7Z"/>
    </Icon>
  );
});

IconMaterialFontDownloadOffW100.displayName = 'AmauiIconMaterialFontDownloadOffW100';

export default IconMaterialFontDownloadOffW100;
