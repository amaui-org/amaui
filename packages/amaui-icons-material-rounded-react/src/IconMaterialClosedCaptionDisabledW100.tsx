import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialClosedCaptionDisabledW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClosedCaptionDisabledW100'

      short_name='ClosedCaptionDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.1 5.3h10.1q.65 0 1.075.425.425.425.425 1.075v10.1l-.7-.7V6.8q0-.35-.225-.575Q18.55 6 18.2 6H8.8Zm8.3 8.3v-.275q0-.125.113-.213.112-.087.237-.087.15 0 .25.1t.1.225v.275q0 .125-.062.238-.063.112-.138.237l-.5-.5ZM14 9.4h2q.45 0 .775.325t.325.775v.125q0 .125-.087.225-.088.1-.263.1-.175 0-.262-.1-.088-.1-.088-.225V10.5q0-.15-.125-.275Q16.15 10.1 16 10.1h-2q-.15 0-.275.125-.125.125-.125.275v.3l-.65-.65q.125-.325.413-.538Q13.65 9.4 14 9.4Zm-.1 1.7Zm-2.775 1.025ZM9.4 9.4l.7.7H8q-.15 0-.275.125-.125.125-.125.275v3q0 .15.125.275.125.125.275.125h2q.15 0 .275-.125.125-.125.125-.275v-.125q0-.125.088-.238.087-.112.262-.112.175 0 .263.112.087.113.087.238v.125q0 .45-.325.775T10 14.6H8q-.45 0-.775-.325T6.9 13.5v-3q0-.45.325-.775T8 9.4ZM5.35 5.35 6 6h-.2q-.3 0-.55.25Q5 6.5 5 6.8v10.4q0 .3.25.55.25.25.55.25H17L2.5 3.5q-.1-.1-.112-.238Q2.375 3.125 2.5 3t.25-.125q.125 0 .25.125l18.55 18.55q.1.1.113.238.012.137-.113.262t-.25.125q-.125 0-.25-.125L17.7 18.7H5.8q-.65 0-1.075-.425Q4.3 17.85 4.3 17.2V6.8q0-.525.288-.925.287-.4.762-.525Z"/>
    </Icon>
  );
});

IconMaterialClosedCaptionDisabledW100.displayName = 'AmauiIconMaterialClosedCaptionDisabledW100';

export default IconMaterialClosedCaptionDisabledW100;
