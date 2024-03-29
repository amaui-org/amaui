import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFluorescentW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FluorescentW100'

      short_name='Fluorescent'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.8 13.8q-.625 0-1.062-.438Q6.3 12.925 6.3 12.3v-.6q0-.625.438-1.063.437-.437 1.062-.437h8.4q.625 0 1.062.437.438.438.438 1.063v.6q0 .625-.438 1.062-.437.438-1.062.438Zm4.2-9q-.15 0-.25-.1t-.1-.25v-1.5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.5q0 .15-.1.25t-.25.1Zm5.95 2.3q-.125-.125-.125-.25t.125-.25l.9-.9q.1-.1.237-.113.138-.012.263.113t.125.25q0 .125-.125.25l-.9.9q-.1.1-.238.112-.137.013-.262-.112ZM12 21.3q-.15 0-.25-.1t-.1-.25v-1.5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.5q0 .15-.1.25t-.25.1Zm6.85-3-.9-.9q-.1-.1-.113-.237-.012-.138.113-.263t.25-.125q.125 0 .25.125l.9.9q.1.1.113.238.012.137-.113.262t-.25.125q-.125 0-.25-.125ZM5.55 7.1l-.9-.9q-.1-.1-.113-.238-.012-.137.113-.262t.25-.125q.125 0 .25.125l.9.9q.1.1.113.237.012.138-.113.263t-.25.125q-.125 0-.25-.125Zm-.9 11.2q-.125-.125-.125-.25t.125-.25l.9-.9q.1-.1.238-.112.137-.013.262.112t.125.25q0 .125-.125.25l-.9.9q-.1.1-.237.113-.138.012-.263-.113Zm3.15-5.2h8.4q.35 0 .575-.225Q17 12.65 17 12.3v-.6q0-.35-.225-.575-.225-.225-.575-.225H7.8q-.35 0-.575.225Q7 11.35 7 11.7v.6q0 .35.225.575.225.225.575.225Zm-.8 0V10.9 13.1Z"/>
    </Icon>
  );
});

IconMaterialFluorescentW100.displayName = 'AmauiIconMaterialFluorescentW100';

export default IconMaterialFluorescentW100;
