import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStopScreenShareW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StopScreenShareW100'

      short_name='StopScreenShare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.9 11.05 12.65 9.8h.7v-.125q0-.275.238-.388.237-.112.437.088l.5.5q.05.05.1.275 0 .025-.1.275Zm6.05 6.05-.55-.55q.275-.075.437-.3.163-.225.163-.45V6.4q0-.35-.225-.575Q19.55 5.6 19.2 5.6H8.45l-.7-.7H19.2q.65 0 1.075.425.425.425.425 1.075v9.4q0 .35-.162.712-.163.363-.588.588Zm1.2 5.05L18 19H2.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H17.3l-1-1H4.8q-.65 0-1.075-.425Q3.3 16.45 3.3 15.8V6.4q0-.425.225-.763Q3.75 5.3 4.1 5.1L1.85 2.85q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l19.3 19.3q.1.1.113.237.012.138-.113.263t-.25.125q-.125 0-.25-.125ZM10.1 11.1q-.2.225-.3.462-.1.238-.1.588v1.65q0 .15-.1.25t-.25.1q-.15 0-.25-.1T9 13.8v-1.65q0-.525.188-.925.187-.4.412-.625L4.625 5.625q-.3.125-.463.313Q4 6.125 4 6.4v9.4q0 .35.225.575.225.225.575.225h10.8Zm1.9 0Zm-1.875 0Z"/>
    </Icon>
  );
});

IconMaterialStopScreenShareW100.displayName = 'AmauiIconMaterialStopScreenShareW100';

export default IconMaterialStopScreenShareW100;
