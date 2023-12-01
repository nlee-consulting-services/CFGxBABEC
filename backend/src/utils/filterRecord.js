const defaultParams = {
  max_lon: 180,
  min_lon: -180,
  max_lat: 90,
  min_lat: -90,
  order_id: null,
  student_id: null,
  teacher_id: null,
  org_id: null,
};

const applyFilters = (rows, params) => {
  if (Object.keys(params).length === 0) {
    return rows;
  }
  const checkRow = (r, params) => {
    if (params.max_lon && r.location_lon > params.max_lon) {
      return false;
    }
    if (params.min_lon && r.location_lon < params.min_lon) {
      return false;
    }
    if (params.max_lat && r.location_lat > params.max_lat) {
      return false;
    }
    if (params.min_lat && r.location_lat < params.min_lat) {
      return false;
    }
    if (params.order_id && r.order_id !== params.order_id) {
      return false;
    }
    if (params.student_id && r.student_id !== params.student_id) {
      return false;
    }
    if (params.teacher_id && r.teacher_id !== params.teacher_id) {
      return false;
    }
    return true;
  };
  const filteredData = rows.filter((r) => {
    return checkRow(r, params);
  });
  return filteredData;
};

export { applyFilters };
