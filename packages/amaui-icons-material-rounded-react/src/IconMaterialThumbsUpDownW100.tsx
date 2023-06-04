import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialThumbsUpDownW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbsUpDownW100'

      short_name='ThumbsUpDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.15 13.05q-.65 0-1.075-.425Q.65 12.2.65 11.55V5.7q0-.125.05-.262Q.75 5.3.85 5.2l3.9-3.9q.175-.175.413-.188.237-.012.437.113.125.1.2.262.075.163.025.313L5 5.35h4.85q.8 0 1.263.687.462.688.137 1.413L9 12.625q-.075.2-.262.313-.188.112-.388.112Zm6.2-.7L10.65 7v-.15q0-.35-.225-.575-.225-.225-.575-.225h-5.7L5.05 2l-3.7 3.7v5.85q0 .35.225.575.225.225.575.225ZM18.4 22.775q-.125-.1-.2-.237-.075-.138-.025-.338L19 18.65h-4.85q-.8 0-1.262-.688-.463-.687-.138-1.412L15 11.375q.075-.2.263-.313.187-.112.387-.112h6.2q.65 0 1.075.425.425.425.425 1.075v5.85q0 .125-.05.262-.05.138-.15.238l-3.9 3.9q-.175.175-.413.187-.237.013-.437-.112ZM15.65 11.65 13.35 17v.15q0 .35.225.575.225.225.575.225h5.7l-.9 4.05 3.7-3.7v-5.85q0-.35-.225-.575-.225-.225-.575-.225Zm-14.3-.1V5.7 12.35 11.55Zm21.3.9v5.85V11.65 12.45Z"/>
    </Icon>
  );
});

IconMaterialThumbsUpDownW100.displayName = 'AmauiIconMaterialThumbsUpDownW100';

export default IconMaterialThumbsUpDownW100;
