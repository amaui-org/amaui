import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReportW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReportW100'

      short_name='Report'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.425 19.7q-.3 0-.587-.125-.288-.125-.488-.325l-3.6-3.6q-.2-.2-.325-.488-.125-.287-.125-.587v-5.15q0-.3.125-.588.125-.287.325-.487l3.6-3.6q.2-.2.488-.325.287-.125.587-.125h5.15q.3 0 .588.125.287.125.487.325l3.6 3.6q.2.2.325.487.125.288.125.588v5.15q0 .3-.125.587-.125.288-.325.488l-3.6 3.6q-.2.2-.487.325-.288.125-.588.125ZM12 16.25q.225 0 .363-.15.137-.15.137-.35 0-.225-.137-.363-.138-.137-.363-.137-.2 0-.35.137-.15.138-.15.363 0 .2.15.35.15.15.35.15Zm0-2.65q.15 0 .25-.1t.1-.25v-5.4q0-.15-.1-.25T12 7.5q-.15 0-.25.1t-.1.25v5.4q0 .15.1.25t.25.1ZM9.1 19h5.8l4.1-4.1V9.1L14.9 5H9.1L5 9.1v5.8Zm2.9-7Z"/>
    </Icon>
  );
});

IconMaterialReportW100.displayName = 'AmauiIconMaterialReportW100';

export default IconMaterialReportW100;
