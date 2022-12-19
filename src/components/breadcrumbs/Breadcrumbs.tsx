import { Breadcrumbs as MUIBreadcrumbs } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export const Breadcrumbs = () => {

  let location = useLocation();

  useEffect(() => {
  }, [location]);

  const pathnames: string[] = location?.pathname?.split("/").filter((x: any) => x);

  return (
    <>
      <MUIBreadcrumbs aria-label="breadcrumb">
          {
            pathnames?.length > 0 ? (
              <Link to='/'>Home</Link>
            ) : (
              <Typography>Home</Typography>
            )
          }
          {
            pathnames?.map((name: string, index: number) => {
              const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
              const isLast = index === pathnames.length - 1;
              return isLast ? (
                <Typography key={name}>{name}</Typography>
              ) : (
                <Link key={name} to={`${routeTo}`}>{name}</Link>
              )
            })
          }
      </MUIBreadcrumbs>
    </>
  );
};